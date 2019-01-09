import React from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import Paragraph from '../../atoms/Paragraph'
import size from './size'
import fluid from '../../../utils/fluid'
import classNames from 'classnames'
import Dropzone from 'react-dropzone'

const UploadContainer = styled.div`
  display: inline-block;
  border: 1px dashed ${props => props.theme.font};
  padding: 8px;

  ${Button} {
    margin-right: 16px;
  }

  ${size}
  ${fluid}
`

const Text = styled(Paragraph)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const FakeUpload = styled.div`
  display: flex;
  align-items: center;
`

class Upload extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      files: []
    }
  }

  onDrop(files) {
    this.setState({ files })
  }

  onCancel() {
    this.setState({
      files: []
    })
  }

  render() {
    return (
      <Dropzone
        onDrop={this.onDrop.bind(this)}
        onFileDialogCancel={this.onCancel.bind(this)}
      >
        {({ getRootProps, getInputProps }) => {
          return (
            <UploadContainer
              {...getRootProps()}
              className={classNames('dropzone', this.props.className)}
            >
              <FakeUpload>
                <Button color={this.props.color} size={this.props.size}>
                  {this.props.button}
                </Button>
                <Text size={this.props.size}>
                  {this.state.files.length > 0
                    ? this.state.files[0].name
                    : this.props.paragraph}
                </Text>
              </FakeUpload>

              <input {...getInputProps()} />
            </UploadContainer>
          )
        }}
      </Dropzone>
    )
  }
}

export default Upload
