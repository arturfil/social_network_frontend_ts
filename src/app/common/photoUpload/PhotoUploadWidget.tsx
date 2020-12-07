
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Button, Grid, GridColumn, Header } from "semantic-ui-react";
import PhotoWidgetDropzone from "./PhotoWidgetDropzone";
import PhotoWidgetCropper from './PhotoWidgetCropper';

interface IProps {
  loading: boolean,
  uploadPhoto: (file: Blob) => void;
}

export const PhotoUploadWidget: React.FC<IProps> = ({loading, uploadPhoto}) => {
  const [files, setFiles] = useState<any[]>([]);
  const [image, setImage] = useState<Blob | null>(null);

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview))
    }
  }, [files])

  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width='4'>
            <Header color='teal' sub content="Step 1 - Add Photo" />
            <PhotoWidgetDropzone setFiles={setFiles}/>
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header sub color='teal' content="Step 2 - Resize image" />
            {files.length > 0 && 
              <PhotoWidgetCropper setImage={setImage} imagePreview={files[0].preview}/>
            }
          </Grid.Column>
          <Grid.Column width={1} />
          <GridColumn width={4}>
            <Header sub color="teal" content="Step 3 - Review & Upload"/>
            {files.length > 0 &&
              <>
                <div className='img-preview' style={{minHeight: '200px', overflow: 'hidden'}}/>
                <Button.Group widths={2}>
                  <Button positive icon='check' loading={loading} onClick={() => uploadPhoto(image!)}/>
                  <Button icon='close' disabled={loading} onClick={() => setFiles([])}/>
                </Button.Group>
              </>
            }
          </GridColumn>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default observer(PhotoUploadWidget);