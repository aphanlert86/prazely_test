import styled from "styled-components";

export const SettingsContainer = styled.div`
  a {
    color: #db2828;

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

        &.secondary {
          input {
            color: rgba(0, 0, 0, 0.6);
          }
        }
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
