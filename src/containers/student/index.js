import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StudentComponent from '../../components/student'
import { fetchStudents, upload } from '../../actions/student';

class Student extends Component {
  constructor(props){
    super(props);
    this.state = {
      isUploadModalOpen: false,
      selectedClass: null,
      search: '',
      page: 1,
      size: 10,
      file: null
    }
  }

  componentDidMount(){
    this.fetchStudents();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.result.uploadSucess != this.props.result.uploadSucess){
      this.fetchStudents()
    }
  }

  fetchStudents = () => {
    this.props.fetchStudents(this.state.page, this.state.size, this.state.search, this.state.selectedClass);
  }

  handleOnChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handlePagination = (page) => {
    this.setState({ page: parseInt(page, 10) }, () => {
      this.fetchStudents();
    });
  }

  onSearch = (e) => {
    this.setState({ page: 1, search: e.target.value }, () => {
      this.fetchStudents();
    });
  }

  resetFilter = () => {
    this.setState({
      ...this.state,
      page: 1,
      search: '',
      selectedClass: null
    }, () => this.fetchStudents())
  }

  onSearchClick = () => {
    this.setState({
      ...this.state,
      page: 1,
    }, () => this.fetchStudents())
  }

  openUpload = () => {
    this.setState({...this.state, isUploadModalOpen: true})
  }

  closeUpload = () => {
    this.setState({...this.state, isUploadModalOpen: false, file: null})
  }

  handleFileSelect = (event) => {
    event.persist();
    this.setState({
      ...this.state,
      file: event.target.files[0],
    })
  }

  upload = () => {
    const formData = new FormData();
    formData.append('file', this.state.file,this.state.file.name);
    this.props.upload(formData)
    this.closeUpload()
  }

  render() {
    const { result } = this.props
    return (
      <StudentComponent
        filters={ this.state.filters }
        studentData={ result.data.students }
        sizePerPage={ this.state.size }
        page={this.state.page}
        totalSize={ result.data.page_count }
        classNames={ result.data.class_names }
        handlePagination={ this.handlePagination }
        onSearch={this.onSearch}
        onSearchClick={ this.onSearchClick }
        search={this.state.search}
        selectedClass={ this.state.selectedClass }
        handleOnChange={ this.handleOnChange }
        reset={ this.resetFilter }
        openUpload={ this.openUpload }
        closeUpload={ this.closeUpload }
        isUploadModalOpen={ this.state.isUploadModalOpen }
        handleFileSelect={ this.handleFileSelect }
        file={ this.state.file }
        upload={ this.upload }/>
    );
  }
}

Student.propTypes = {
  propName1 : PropTypes.string,
  propName2 : PropTypes.bool,
  propName3 : PropTypes.array,
}

const mapStateToProps = state => ({
  result: state.studentReducer,
})

const mapDispatchToProps = dispatch => ({
  fetchStudents: (page, size, search, class_name) => dispatch(fetchStudents(page, size, search, class_name)),
  upload: (formData) => dispatch(upload(formData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Student);
