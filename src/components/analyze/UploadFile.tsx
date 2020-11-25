import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faTimes } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid_v4 } from "uuid";
import Swal from "sweetalert2";
import "./UploadFile.css";

interface FileCustom {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
  url: string;
  id: string;
}

interface IState {
  files: FileCustom[];
}

interface IProps {
  analyze: boolean;
  onClickAnalyze(): void;
}
export default class UploadImage extends React.PureComponent<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      files: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickAnalyze = this.handleClickAnalyze.bind(this);
    this.handleClickRemoveImage = this.handleClickRemoveImage.bind(this);
  }

  handleChange(event: any) {
    const files = [...event.target.files];
    const fileWithURL = files.map((f: any) => {
      return {
        lastModified: f.lastModified,
        lastModifiedDate: f.lastModifiedDate,
        name: f.name,
        size: f.size,
        type: f.type,
        webkitRelativePath: f.webkitRelativePath,
        url: URL.createObjectURL(f),
        id: uuid_v4(),
      };
    });
    const filesState = this.state.files.concat(fileWithURL);
    this.setState({
      files: filesState,
    });
  }

  handleClickAnalyze() {
    if (this.state.files.length > 0) {
      this.props.onClickAnalyze();
      fetch("http://localhost:5000/upload-image").then((response) =>
        console.log(response.json())
      );
    } else {
      Swal.fire({
        title: "Choisissez le(s) photo(s) du véhicule pour l'analyse.",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
      });
    }
  }

  handleClickRemoveImage(id: string) {
    const filesState = this.state.files;
    this.setState({
      files: filesState.filter((f) => f.id !== id),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faCamera} className="mr-2 ml-2" />
            </span>
          </div>
          <div className="custom-file">
            <input
              multiple={true}
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              onChange={this.handleChange}
              accept=".jpg,.jpeg,.png"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              Choisissez le(s) photo(s) du véhicule
            </label>
          </div>
        </div>
        {this.state.files.length > 0 &&
          this.state.files.map((file) => (
            <div key={file.name} className="mt-2 mb-2">
              <FontAwesomeIcon
                icon={faTimes}
                className="close-hover"
                onClick={() => this.handleClickRemoveImage(file.id)}
              />
              <img
                src={file.url}
                height="114"
                alt=""
                className="ml-2 mr-2"
              />
            </div>
          ))}

        <button
          className="btn btn-lg btn-primary btn-block mt-2"
          type="submit"
          onClick={() => this.handleClickAnalyze()}
        >
          Lancer l'analyse !
        </button>
      </div>
    );
  }
}
