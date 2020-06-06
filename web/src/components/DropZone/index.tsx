import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props {
    onFileUploaded: (file: File) => void;
}

const DropZone: React.FC<Props> = ({ onFileUploaded }) => {
    const [selectedFileUrl, setSelectedFileUrl] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];

        const fileURL = URL.createObjectURL(file);

        setSelectedFileUrl(fileURL);
        onFileUploaded(file);
    }, [onFileUploaded]);

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: 'image/*'
    });

    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()}  accept='image/*' />

            {
                selectedFileUrl 
                ?<img src={selectedFileUrl} alt="Ponto de coleta"/> 
                :<p>
                    <FiUpload />
                    Imagem do estabelecimento
                </p> 
            }
        </div>
    )
}

export default DropZone;