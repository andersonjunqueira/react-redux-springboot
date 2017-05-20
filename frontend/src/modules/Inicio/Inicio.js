import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, change } from 'redux-form';

import { Form } from 'reactstrap';

import Card, { CardHeader, CardFooter, CardBody } from '../../components/Card';
import Text from '../../components/Text';
import Number from '../../components/Number';
import Email from '../../components/Email';
import CPF from '../../components/CPF';
import Select from '../../components/Select';
import UF from '../../components/UF';
import Phone from '../../components/Phone';
import Endereco from '../../components/Endereco';

class Showcase extends Component {

    constructor(props) {
        super(props);
        this.carregarEndereco = this.carregarEndereco.bind(this);
    }

    carregarEndereco(address) {
        if(address) {
            this.props.dispatch(change(this.props.form, 'logradouro', address.logradouro));
            this.props.dispatch(change(this.props.form, 'bairro', address.bairro));
            this.props.dispatch(change(this.props.form, 'cidade', address.cidade));
            this.props.dispatch(change(this.props.form, 'uf', address.uf));
        }
    }

    render() {
        return (
        <div className="container">
            <div className="row justify-content-center">

                <div className="col-md-8 offset-md-4">
                    <Form>
                    <h3>Showcase</h3>
                    </Form>
                </div>

            </div>
        </div>
        );
    }
}

Showcase = reduxForm({ form: "ShowcaseForm" })(Showcase);

const mapStateToProps = (state) => {
    return {
        ...state.showcaseReducer
    }
};

Showcase = connect( 
    mapStateToProps
)(Showcase);

export default Showcase;
