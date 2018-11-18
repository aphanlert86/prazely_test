import styled from "styled-components";

export const SettingsContainer = styled.div`
  a {
    color: #db2828;
    cursor: pointer;
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
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;
