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
            <Form>
            <h3>Showcase</h3>

            <div className="row">
                <div className="col-md-12">

                    <Card>
                        <CardHeader>Amostra de Componentes</CardHeader>
                        <CardBody>
                            <Endereco zipcodeParams={{ form: "ShowcaseForm", callback: this.carregarEndereco }}/>
                        </CardBody>
                    </Card>

                </div>
            </div>

            <div className="row">
                <div className="col-md-6">

                    <Card>
                        <CardHeader>Amostra de Componentes</CardHeader>
                        <CardBody>
                            <Text name="text" label="Text" maxLength={10} required={true} help="Texto de Ajuda"/>
                            <Number name="number" label="Number" required={true} help="Texto de Ajuda" minValue={10} maxValue={20}/>
                            <Email name="email" label="E-mail" required={true} help="Texto de Ajuda" maxLength={100}/>
                            <CPF name="cpf" label="CPF" required={true} help="Texto de Ajuda"/>
                            <Phone name="phone" label="Phone" required={true} help="Texto de Ajuda"/>
                        </CardBody>
                    </Card>

              </div>
              <div className="col-md-6">

                  <Card>
                      <CardHeader>Amostra de Componentes</CardHeader>
                      <CardBody>
                          <Select name="select1" label="Select" required={true} help="Texto de Ajuda" options={[{ value: "a", text: "A" }, { value: "b", text: "B" }]} />
                          <Select name="select2" label="Select" required={true} help="Texto de Ajuda" options={[{ value: "a", text: "A" }, { value: "b", text: "B" }]} undefinedOption={false}/>
                          <UF name="uf" label="UF" required={true} help="Texto de Ajuda"/>
                          <UF name="uf2" label="UF" required={true} help="Texto de Ajuda" undefinedOption={false}/>
                      </CardBody>
                  </Card>

              </div>
          </div>

          <div className="row">
              <div className="col-md-4">

                  <Card>
                      <CardHeader>Card</CardHeader>
                      <CardBody>Corpo do Card</CardBody>
                      <CardFooter>Rodapé</CardFooter>
                  </Card>

                  <Card theme="success" inverse={true}>
                    <CardHeader>
                        Card 
                        <label className="switch switch-sm switch-text switch-info float-right mb-0">
                            <input type="checkbox" className="switch-input" />
                            <span className="switch-label" data-on="On" data-off="Off"></span>
                            <span className="switch-handle"></span>
                        </label>
                    </CardHeader>
                    <CardBody>Corpo do Card</CardBody>
                    <CardFooter>Rodapé</CardFooter>
                </Card>

              </div>
              <div className="col-md-4">

                  <Card theme="primary" inverse={true}>
                      <CardHeader><i className="fa fa-check"></i>Card com ícone</CardHeader>
                      <CardBody>Corpo do Card</CardBody>
                      <CardFooter>Rodapé</CardFooter>
                  </Card>

                  <Card theme="warning">
                      <CardHeader>
                          Card
                          <span className="badge badge-success float-right">Success</span>
                      </CardHeader>
                      <CardBody>Corpo do Card</CardBody>
                      <CardFooter>Rodapé</CardFooter>
                  </Card>

              </div>
              <div className="col-md-4">
                  <Card theme="info" inverse={true}>
                      <CardHeader>Card</CardHeader>
                      <CardBody>Corpo do Card</CardBody>
                      <CardFooter>Rodapé</CardFooter>
                  </Card>

                  <Card theme="danger" inverse={true}>
                      <CardHeader>Card</CardHeader>
                      <CardBody>Corpo do Card</CardBody>
                      <CardFooter>Rodapé</CardFooter>
                  </Card>

             </div>
          </div>

        </Form> 
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
