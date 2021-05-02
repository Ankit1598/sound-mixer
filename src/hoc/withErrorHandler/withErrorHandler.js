import React, { Component } from "react"
import Modal from "../../components/UI/Modal/Modal"
import Wrapper from "../Wrapper"

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            })
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }
        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }
        render() {
            return (
                <Wrapper>
                    <Modal show={this.state.error}
                        modalClosed={this.errorConfirmedHandler} >
                    </Modal>
                    <WrappedComponent />
                </Wrapper>
            )
        }
    }
}


export default withErrorHandler