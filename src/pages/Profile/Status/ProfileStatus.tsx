import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

type ProfileStatusPropsType = {
  status: string;
  updateStatus: (status: string) => void;
};

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
    status: this.props.status
  };

  componentDidUpdate(prevProps: ProfileStatusPropsType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  activateEditMode() {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  statusChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ status: e.currentTarget.value });
  }

  render(): React.ReactNode {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <EditableSpan onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</EditableSpan>
            {/* <button onClick={this.activateEditMode.bind(this)}>open</button> */}
          </div>
        ) : (
          <div>
            <input
              autoFocus={true}
              value={this.state.status}
              onBlur={this.deactivateEditMode.bind(this)}
              onChange={this.statusChangeHandler.bind(this)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

const EditableSpan = styled.span`
  display: flex;
  width: 100px;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #0000003e;
`;
