import React, { Component } from 'react';
import { Button, Col, Modal, ModalBody, Progress,
         ModalFooter, ModalHeader, Row, FormGroup, Label, Input, InputGroup } from 'reactstrap';
import classnames from 'classnames';

class UploadModal extends Component {
  render(){
    return(
      <Modal isOpen={ this.props.isUploadModalOpen } className={'modal-md'}>
        <ModalHeader>Upload Student Data</ModalHeader>
        <ModalBody>
          <div className="animated fadeIn">
            <Row>
              <Col xs="12">
                <FormGroup row  className="mb-4">
                  <Col md="3">
                    <Label htmlFor="task-title">File</Label>
                  </Col>
                  <Col md="9">
                  <Input
                      type="file"
                      id="file-multiple-input"
                      onChange={ this.props.handleFileSelect }
                      name="student_csv"
                      accept=".csv"
                    />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="success" className="mr-1" onClick={ this.props.upload }
            disabled={ !this.props.file }>
            Upload
          </Button>
          <Button color="secondary" onClick={ this.props.closeUpload }>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  };
}

export default UploadModal;
