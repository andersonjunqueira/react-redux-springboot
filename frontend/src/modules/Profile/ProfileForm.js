import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, change, FieldArray } from 'redux-form';

import { Form, Row, Col, Button } from 'reactstrap';
import Card, { CardHeader, CardBody } from '../../components/Card';
import Text from '../../components/Text';
import CPF from '../../components/CPF';
import UF from '../../components/UF';
import Endereco from '../../components/Endereco';
import Phone from '../../components/Phone';
import Select from '../../components/Select';
import Email from '../../components/Email';
import Intl from '../../components/Intl';

import { toaster } from "../../app/Notification.actions";
import { translate } from "../../components/Intl/Intl.actions";
import { saveProfile } from "./ProfileForm.actions";

class renderPhones extends Component {
    render() {
        const phoneTypes = [
            {value: "", text: translate("selecione")},
            {value: "com", text: translate("comercial")},
            {value: "res", text: translate("residencial")},
            {value: "cel", text: translate("celular")}
        ];
        const { fields, meta } = this.props; 
        return (
            <Card>
                <CardHeader>
                    <Intl str='telefones'></Intl> 
                    <Button type="button" color="secondary" className="pull-right" size="sm" onClick={() => fields.push()}>
                        <Intl str='adicionar-telefone'></Intl>
                    </Button>
                </CardHeader>
                <CardBody>
                    {fields.map((field, index) => {
                        return (
                            <Row key={index}>
                                <Col xs={6} md={4}>
                                    <Phone name={`${field}.numero`} label={<Intl str='telefone'></Intl>} maxLength={15}/>
                                </Col>
                                <Col xs={4} md={3}>
                                    <Select name={`${field}.tipo`} options={phoneTypes} label={<Intl str='tipo'></Intl>}/>
                                </Col>
                                <Col xs={2} md={1}>
                                    <a className="btn btn-danger fields-remove-button" onClick={() => { fields.remove(index); } }>
                                      <i className="fa fa-trash"></i>
                                    </a>
                                </Col>
                            </Row>
                        );
                    })}
                    {meta.error && <span className="fields-error">{meta.error}</span>}
                </CardBody>
            </Card>   
        );
    }
}

class renderEmails extends Component {
    render() {
        const principalTypes = [
            {value: true, text: translate("sim")},
            {value: false, text: translate("nao")}
        ];
        const { fields, meta } = this.props; 
        return (
            <Card>
                <CardHeader>
                    <Intl str='emails'></Intl> 
                    <Button type="button" color="secondary" className="pull-right" size="sm" onClick={() => fields.push()}>
                        <Intl str='adicionar-email'></Intl>
                    </Button>
                </CardHeader>
                <CardBody>
                    {fields.map((field, index) => {
                        return (
                            <Row key={index}>
                                <Col xs={6} md={4}>
                                    <Email name={`${field}.email`} label={<Intl str='email'></Intl>} maxLength={100}/>
                                </Col>
                                <Col xs={4} md={3}>
                                    <Select name={`${field}.principal`} options={principalTypes} label={<Intl str='principal'></Intl>}/>
                                </Col>
                                <Col xs={2} md={1}>
                                    <a className="btn btn-danger fields-remove-button" onClick={() => { fields.remove(index); } }>
                                      <i className="fa fa-trash"></i>
                                    </a>
                                </Col>
                            </Row>
                        );
                    })}
                    {meta.error && <span className="fields-error">{meta.error}</span>}
                </CardBody>
            </Card>
        );
    }
}

class ProfileForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialized: false
        }
        this.atualizaEndereco = this.atualizaEndereco.bind(this);
    }

    componentDidUpdate() {
        if(!this.state.initialized && Object.keys(this.props.data).length > 0) {
            this.props.dispatch(this.props.initialize(this.props.data));
            this.setState(Object.assign(this.state, { initialized: true }));
        }
    }

    atualizaEndereco(address) { 
        if(address) {
            this.props.dispatch(change(this.props.form, 'logradouro', address.logradouro));
            this.props.dispatch(change(this.props.form, 'bairro', address.bairro));
            this.props.dispatch(change(this.props.form, 'cidade', address.cidade));
            this.props.dispatch(change(this.props.form, 'uf', address.uf));
        } else {
            this.props.dispatch(toaster("cep-nao-encontrado", [], {status: "warning"}));
        }
    }

    render() {
        const { handleSubmit, pristine, reset, submitting, invalid } = this.props;
        return (
            <Form onSubmit={handleSubmit(this.props.save)}>

                <h2><Intl str='meu-perfil'></Intl></h2>

                <Card>
                  <CardHeader><Intl str='informacoes-pessoais'></Intl></CardHeader>
                  <CardBody>

                      <Row>
                        <Col xs={12} md={12}>
                          <Text name="nome" label={<Intl str='nome-completo'></Intl>} maxLength={100} required={true}/>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs={12} md={3}>
                          <CPF name="cpf" label={<Intl str='cpf'></Intl>} />
                        </Col>
                        <Col xs={12} md={3}>
                          <Text name="rg" label={<Intl str='rg'></Intl>} maxLength={20}/>
                        </Col>
                        <Col xs={6} md={3}>
                          <Text name="orgaoExpedidor" label={<Intl str='orgao-expedidor'></Intl>} maxLength={10}/>
                        </Col>
                        <Col xs={6} md={3}>
                          <UF name="ufExpedicao" label={<Intl str='uf'></Intl>}/>
                        </Col>
                      </Row>

                      <Endereco zipcodeParams={{ form: "ProfileForm", callback: this.atualizaEndereco }}/>

                  </CardBody>
                </Card>

                <FieldArray name="telefones" component={renderPhones} />
                <FieldArray name="emails" component={renderEmails} />

                <Button type="submit" color="primary" disabled={invalid || submitting}><Intl str='salvar'></Intl></Button>
                <Button type="button" disabled={pristine || submitting} onClick={() => this.props.dispatch(reset)}><Intl str='desfazer'></Intl></Button>

            </Form>
        );
    }

}

const validate = values => {
    const errors = {};
    if(values.telefones && values.telefones.length < 1) {
        errors.telefones = [];
        errors.telefones._error = translate("telefone-obrigatorio");
    }

    if(values.emails && values.emails.length < 1) {
        errors.emails = [];
        errors.emails._error = translate("email-obrigatorio");
    }
    return errors;
}

ProfileForm = reduxForm({ form: "ProfileForm", validate })(ProfileForm);

const mapStateToProps = (state) => {
    return {
        data: state.profileReducer
    }
};

ProfileForm = connect( 
    mapStateToProps,
    { save: saveProfile }
)(ProfileForm);

export default ProfileForm;
