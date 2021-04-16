import { connect } from 'react-redux';
import AddProjectForm from 'src/components/Profil/AddProjectForm';

import { changeInpuValue, createProject } from 'src/actions/project';

const mapStateToProps = (state) => ({
  name: state.project.name,
  description: state.project.description,
  youtube: state.project.youtube,
  github: state.project.github,
  prod: state.project.prod,
  projectCreated: state.project.projectCreated,
  ErrorOnTheProjectCreation: state.project.ErrorOnTheProjectCreation,
});

const mapDispatchToProps = (dispatch) => ({
  changeInpuValue: (value, name) => {
    dispatch(changeInpuValue(value, name));
  },
  createProject: () => {
    dispatch(createProject());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProjectForm);
