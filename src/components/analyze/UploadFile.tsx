import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faTimes } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid_v4 } from "uuid";
import Swal from "sweetalert2";
import axios from "axios";
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
  loading: boolean;
  onClickAnalyze(): void;
  startLoading(): void;
  endLoading(): void;
}

function delayJob(ms: number) {
  console.log("DELAYYYY");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
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

  async handleClickAnalyze() {
    if (this.state.files.length > 0) {
      this.props.onClickAnalyze();
      this.props.startLoading();
      this.state.files.forEach((f, index) => {
        const imagefile = document.querySelector(
          "#inputGroupFile01"
        ) as HTMLInputElement;
        if (!!imagefile && imagefile.files) {
          const formData = new FormData();
          formData.append("data", imagefile.files[index]);
          axios
            .post("http://localhost:5000/upload-image", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              if (response.status !== 201) {
                Swal.fire({
                  title:
                    "Les fichiers ne sont pas valables veuillez réessayer.",
                  icon: "warning",
                  showCancelButton: false,
                  confirmButtonColor: "#3085d6",
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
      await delayJob(5000);
      this.props.endLoading();
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
              <img src={file.url} height="114" alt="" className="ml-2 mr-2" />
            </div>
          ))}

        {!this.props.loading && !this.props.analyze && (
          <button
            className="btn btn-lg btn-primary btn-block mt-2"
            type="submit"
            onClick={async () => await this.handleClickAnalyze()}
          >
            Lancer l'analyse !
          </button>
        )}
      </div>
    );
  }
}
