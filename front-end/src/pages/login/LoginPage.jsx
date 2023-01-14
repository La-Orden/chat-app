import React from 'react';
import LoginForm from './../../components/forms/LoginForm';
import SingleFormPage from '../../components/layout/SingleFormPage';

function LoginPage() {

    return (
        <SingleFormPage imageURL={"https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10"}>
            <LoginForm />
        </SingleFormPage>
    );
}

export default LoginPage;
