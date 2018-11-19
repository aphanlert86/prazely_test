import styled from "styled-components";

export const SettingsContainer = styled.div`
  a {
    color: #db2828;
    cursor: pointer;

    &.action-disabled {
      color: grey;
    }
  }

  form {
    .field {
      display: flex;
      align-items: center;

      label {
        width: 150px !important;
        color: #aaa !important;
      }

      .ui.input {
        flex-grow: 1;
      }
    }
  }

  .userpic-actions {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    a {
      margin: 5px 0;
    }
  }

  .user-image-small {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 auto;
  }
`;
