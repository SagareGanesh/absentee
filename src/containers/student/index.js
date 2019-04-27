import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StudentComponent from '../../components/student'
import { fetchStudents } from '../../actions/student';

class Student extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedClass: null,
      search: '',
      page: 1,
      size: 10,
      filters: {
        class: null,
        division: null,
      }
    }
  }

  componentDidMount(){
    this.fetchStudents(this.state.page, this.state.size);
  }

  fetchStudents = () => {
    this.props.fetchStudents(this.state.page, this.state.size, this.state.search, this.state.selectedClass);
  }

  handleOnChange = (e) => {
    let filters = this.state.filters;
    filters[e.target.name] = e.target.value;
    this.setState({filters: filters})
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
      filters: {
        class: '',
        division: '',
      }
    }, () => this.fetchStudents())
  }

  onSearchClick = () => {
    this.setState({
      ...this.state,
      page: 1,
    }, () => this.fetchStudents())
  }

  render() {
    const { result } = this.props
    return (
      <StudentComponent
        filters={ this.state.filters }
        studentData={ result.data.students }
        sizePerPage={ this.state.size }
        totalSize={ result.data.total }
        classNames={ result.data.class_names }
        handlePagination={ this.handlePagination }
        onSearch={this.onSearchClick}
        search={this.state.search}
        selectedClass={ this.state.selectedClass }/>
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
  fetchStudents: (page, size) => dispatch(fetchStudents(page, size)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Student);
