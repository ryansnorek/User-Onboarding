import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Please enter username')
        .min(3, 'Name must be at least 3 characters'),
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Email required'),
    password: yup
        .string()
        .required('Password required')
        .oneOf(['!','@','#','$','%','^','&','*','(',')']),
    terms: yup.boolean()
})

export default schema