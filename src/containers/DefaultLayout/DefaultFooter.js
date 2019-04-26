import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Input, Label, FormGroup, Form } from 'reactstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    const { locale, setLanguage, children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>&copy; <FormattedMessage {...messages.Footer} /></span>
        <span className="ml-auto">
          <Form inline>
            <FormGroup>
              <Label><FormattedMessage {...messages.Language} />&nbsp;</Label>
              <Input onChange={(event) => setLanguage(event)} value={locale} size="sm" type="select" name="select" id="exampleSelect">
                <option value="en">English</option>
                <option value="mr">Marathi</option>
              </Input>
            </FormGroup>
          </Form>
        </span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
