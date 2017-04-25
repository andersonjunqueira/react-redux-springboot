import React, { Component, PropTypes } from 'react';
import { FormGroup, Label, Input, FormText, FormFeedback, InputGroup, InputGroupButton, Button } from 'reactstrap';

class BootstrapInput extends Component {
    render() {
        const field = this.props; 
        const attrs = { 
            type: field.type,
            placeholder: field.placeholder, 
            maxLength: field.maxLength, 
            className: field.className,
            state: field.meta.error && field.meta.touched ? "danger" : ""
        };

        let feedback = (<FormText color="muted">{field.help}</FormText>);
        if(field.meta.error && field.meta.touched) {
            feedback = (<FormFeedback>{field.meta.error}</FormFeedback>);
        }

        return (
            <FormGroup color={field.meta.error && field.meta.touched ? "danger" : null}>
                {field.label && <Label for={field.name}>
                    {field.label}
                    {field.required && <span className="required"> *</span>}
                </Label>}

                {attrs.type !== "select" && 
                    <InputGroup>
                        <Input {...field.input} {...attrs}/>
                        {field.rightButtonLabel &&  
                            <InputGroupButton>
                                <Button type="button" onClick={field.rightButtonAction}>{field.rightButtonLabel}</Button>
                            </InputGroupButton>
                        }
                    </InputGroup>}

                {attrs.type === "select" &&
                    <Input {...field.input} {...attrs}>
                        {this.props.options.map( (op, index) => {
                            return (<option key={index} value={op.value}>{op.text}</option>);
                        })}
                    </Input>
                }

                {feedback}
            </FormGroup>
        );
    }
}

BootstrapInput.propTypes = {
    label: PropTypes.node,
    help: PropTypes.string,
    maxLength: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.object),
    rightButton: PropTypes.object
}

BootstrapInput.defaultProps = {
    options: []
};

export default BootstrapInput;