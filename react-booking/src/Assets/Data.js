import * as Yup from 'yup';

const formInitialValues = {
	from: '',
	to: '',
	check_in: '',
	check_out: '',
	guests: '',
};

const formValidationSchema = Yup.object().shape({
	from: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	to: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	check_in: Yup.date().required('Required'),
	check_out: Yup.date().required('Required'),
	guests: Yup.number().required('Required'),
});

export { formInitialValues, formValidationSchema };
