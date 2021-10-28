import React, {FC} from 'react';

import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {useDispatch} from "react-redux";

import {authorization} from "../store/reducers/auth";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar: FC = () => {
    // const router = useHistory()

    const auth = useTypedSelector(state => state.authReducer.isAuth)
    const dispatch = useDispatch()

    const logoutHandler = (): void => {
        dispatch(authorization())
        // router.push(RouteNames.LOGIN)

    }
    const loginHandler = (): void => {
        dispatch(authorization())
        // router.push(RouteNames.EVENT)

    }

    return (
        <Layout.Header>
            <Row justify='end'>
                {auth ?
                    <>
                        <div style={{color: 'white'}}>My name</div>
                        <Menu theme='dark' mode='horizontal' selectable={false}>

                            <Menu.Item
                                onClick={loginHandler}
                                key='1'>
                                Log out
                            </Menu.Item>


                        </Menu>
                    </>
                    :
                    <Menu theme='dark' mode='horizontal' selectable={false} disabledOverflow={true}>
                        <Menu.Item
                            onClick={logoutHandler}
                            key='1'>
                            Login
                        </Menu.Item>

                    </Menu>
                }


            </Row>

        </Layout.Header>
    );
};

export default Navbar;
