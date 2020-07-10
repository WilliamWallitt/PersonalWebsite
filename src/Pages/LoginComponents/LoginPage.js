import React from "react";
import { connect } from 'react-redux';

import "../../assets/Stylesheets/LoginPage.css"
import Input from "../Components/UI/Input/Input"
import Container from "react-bootstrap/Container";
import Button from "../Components/UI/Button/Button"
import GuassianBlur from "../../assets/Images/Multicolor_gaussian_blur_gradient_2560x1600.jpg"

import * as actions from "../../Pages/Actions/index"


const image_styling = {

    backgroundImage: "url(" + GuassianBlur + ")",
    height: "95vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

}

class LoginPage extends React.Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: true
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            // update our controls[controlName] object
            // ... = copies all controls inside the object
            ...this.state.controls,
            [controlName]: {
                // new object created, now we can adjust the values inside the object
                // so the value would be whatever the user has typed
                // using event.target.value
                // the check_validity function will return T/F if user has typed is valid
                // touched - as user has entered input is true
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        // now we set the new state
        this.setState({controls: updatedControls});
    }


    // checking if the input is valid

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            // switch values
            return {isSignUp: !prevState.isSignUp}
        })
    }


    render() {

        // flattening the object into an array
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        // now we are going to create our JSX elements with this array
        let form = formElementsArray.map( formElement => (
            <Input
                className="fadeIn second"
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler(event, formElement.id )}
            />
        ) );


        if (this.props.loading) {
            form = <img src="https://media.giphy.com/media/feN0YJbVs0fwA/giphy.gif" alt="loading..." style={{width: "100%", height: "100%"}}/>
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }

        if (this.props.token !== null) {
            console.log(this.props.token, "TOKEN STUFF")
            return <h1>Success</h1>
        }

        return(

            <Container id="main" fluid style={{width: "100vw", height: "95vh", fontFamily: "Muli", ...image_styling}}>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <div className="jumbotron m-3 p-3 bg-transparent">
                                <Button type="submit" clicked={() => this.switchAuthModeHandler()}>{
                                    this.state.isSignUp ? "Sign In" : "Sign Up"}
                                    {this.props.idToken}
                                </Button>
                                <h1 className="h3">Admin Login</h1>
                                {errorMessage}
                            </div>
                        </div>
                        <form onSubmit={this.submitHandler}>
                            {form}
                            <Button btnType="submit">SUBMIT</Button>
                        </form>
                    </div>
                </div>


            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);









// <Container id="main" fluid style={{width: "100vw", height: "95vh", fontFamily: "Muli"}}>
//     <div className="wrapper fadeInDown">
//         <div id="formContent">
//             <div className="fadeIn first">
//                 <div className="jumbotron m-4 p-4 bg-transparent">
//                     <h1 className="h3">Admin Login</h1>
//                 </div>
//             </div>
//             <form>
//                 <input type="text" id="login" className="fadeIn second" name="username" placeholder="username"/>
//                 <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"/>
//                 <input type="submit" className="fadeIn fourth" value="Log In"/>
//             </form>
//         </div>
//     </div>
//
// </Container>

// <div className="Auth">
//     {form}
//     <Button type="Success">Log in</Button>
// </div>