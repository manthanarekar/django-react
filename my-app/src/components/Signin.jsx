import { useState } from "react"

export default function Signin(){

    const [formData,setFormData] = useState({
        uemail:'',upass1:''
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
        
        let storeEmail = localStorage.getItem('uemail')
        let storeUpass = localStorage.getItem('upass')

        if(!formData.uemail) newErrors.uemail = 'Email is required';
        if(!formData.upass1) newErrors.upass1 = 'Password is required';

        if(formData.uemail !== storeEmail ) newErrors.uemail = "Email is incorrect"
        if(formData.upass1 !== storeUpass ) newErrors.upass1 = "Password is incorrect"

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
            setsuccessMsg('SignIN Done Successdully!..');
            alert('Welcome to our services..')

            
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
                    <h1 className="text-center mt-4">Sign IN Form</h1>
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