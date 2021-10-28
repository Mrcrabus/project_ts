import React, {FC} from 'react';
import {Layout, Row} from "antd";
import style from './Login.module.css'
import LoginForm from "../components/LoginForm";

const Login: FC = () => {
    return (
        <Layout>
            <Row justify="center" align='middle' className={style.login__wrapper}>
                <LoginForm/>
            </Row>
        </Layout>
    );
};

export default Login;
