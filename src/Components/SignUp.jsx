import { useFormik } from 'formik';
import validition from './validition';

function SignUp() {
  const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({
    initialValues: {
    email: '', 
    password: '', 
    againPassword: ''  
    },
    onSubmit: values => {
    console.log(values);
    },
    validationSchema: validition      
  }); 
  return (
    <div>    
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Mail</label>
          <input type="email" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          {errors.email && touched.email && <div className='bg-sky-300'>{errors.email}</div>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="******************" />
          {errors.password && touched.password && <div className='bg-sky-300'>{errors.password}</div>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Again Password</label>
          <input type="password" name="againPassword" value={values.againPassword} onBlur={handleBlur} onChange={handleChange} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="******************" />
          {errors.againPassword && touched.againPassword && <div className='bg-sky-300'>{errors.againPassword}</div>}
        </div>

        <div className="flex items-center justify-between">
          <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Sign In</button>
        </div>
      </form>
    </div>
  )
}
export default SignUp