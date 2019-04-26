/**
 *
 * Footer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Input, Label, FormGroup, Form } from 'reactstrap';
import { AppFooter } from '@coreui/react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles';

class FooterComponent extends Component {
  render() {
    const { locale, setLanguage } = this.props;
    return (
      <AppFooter>
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
      </AppFooter>
    );
  }
}

FooterComponent.propTypes = {
  locale : PropTypes.string.isRequired,
  setLanguage : PropTypes.func.isRequired,
}

export default FooterComponent;
