import React from 'react';
import RegisterForm from '../../components/forms/RegisterForm';
import SingleFormPage from '../../components/layout/SingleFormPage';

function RegisterPage() {

    return (
        <SingleFormPage imageURL={"https://images.pexels.com/photos/37650/new-zealand-lake-mountain-landscape-37650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10"} >
            <RegisterForm />
        </SingleFormPage>
    );
}

export default RegisterPage;
