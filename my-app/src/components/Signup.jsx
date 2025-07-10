import { useState } from "react"

export default function Signup({onSignupSuccess}){

    const [formData,setFormData] = useState({
        uemail:'',upass1:'',upass2:''
    });

    const [errors,setErrors] = useState({});
    const [successMsg,setsuccessMsg] = useState('');

    const handelChange=(e)=>{
        setFormData(
            {...formData,[e.target.name]:e.target.value}
        )
    }

    const validate=()=>{
        let newErrors = {}
        const letters = /^[A-Za-z]+$/;
        if(!formData.uemail) newErrors.uemail = 'Email is required';
        if(!formData.upass1) newErrors.upass1 = 'Password is required';
        if(!formData.upass2) newErrors.upass2 = 'Confirm Password is required';

        if((formData.upass).length<8) newErrors.upass = "Password must be 8 character length"
        if(formData.upass !== 0) newErrors.ucpass = "Password and Confirm password must be same";
        return newErrors;
    }

    const handelSubmit=(e)=>{
        e.preventDefault()
        const validateErrors = validate()
        setErrors(validateErrors);
        if(Object.keys(validateErrors).length===0)
        {
            localStorage.setItem('uemail',formData.uemail);
            localStorage.setItem('upass',formData.upass1);
            setsuccessMsg('SignUp Done Successdully!..');
            window.location.href=window.location.href+Signin();
            onSignupSuccess();
            
        }
        else
        {
            setsuccessMsg('SignUp Failed!...')
        }
    }

    return(
        <>
        <div className="container d-flex justify-content-center"  >
                <div className="row">
                    <h1 className="text-center mt-4">Sign up Form</h1>
                    <form className="mt-3" onSubmit={handelSubmit}>
                        {successMsg && <h3><mark>{successMsg}</mark></h3>}
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" onChange={handelChange} name="uemail"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            {errors.uemail && <p><mark>{errors.uemail}</mark></p>}
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" onChange={handelChange} name="upass1" class="form-control" id="exampleInputPassword1" / >
                            {errors.upass1 && <p><mark>{errors.upass1}</mark></p>}
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword2" class="form-label">Re-Password</label>
                            <input type="password" onChange={handelChange} name="upass2" class="form-control" id="exampleInputPassword2" / >
                            {errors.upass2 && <p><mark>{errors.upass2}</mark></p>}
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
        </div>
        </>
    )
}