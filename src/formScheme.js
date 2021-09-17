import * as yup from 'yup';

const formScheme = yup.object().shape({
    counter:yup
    .string()
    .required('Amount is required.'),
    special:yup
    .string()
    ,
    name: yup
    .string()
    .trim()
    .required('Name is required.')
    .min(2, 'name must be at least 2 characters'),
    size: yup
    .string()
    .oneOf(['small','medium','large'],'Size is required.'),
    sauce: yup
    .string()
    .oneOf(['red','garlic','bbq','alfredo'],'Sauce is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    cad_bacon: yup.boolean(),
    itl_sausage: yup.boolean(),
    cad_bacon: yup.boolean(),
    chicken: yup.boolean(),
    bacon: yup.boolean(),
    onions: yup.boolean(),
    green_pepper: yup.boolean(),
    garlic: yup.boolean(),
    pineapple: yup.boolean(),
    three_cheese: yup.boolean(),
    extra_cheese: yup.boolean(),
    
    

})

export default formScheme;