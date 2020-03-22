import { connect } from "react-redux";
import NavBar from "./NavBar";
import { getDepartments } from "../../redux/actions/DepartmentAction";

const mapStoreToProps = state => ({
  departments: state.department.departments
});

const mapDispatchToProps = dispatch => ({
  getDepartments: dispatch(getDepartments())
});

export default connect(mapStoreToProps, mapDispatchToProps)(NavBar);
