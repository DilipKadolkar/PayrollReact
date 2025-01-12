import React, { useState } from 'react';

function EmployeeInfo() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const handleUpload = async() => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:8080/upload', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('File uploaded successfully');
            } else {
                alert('File upload failed');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
        }
    };

    return ( <
            div className = "displayContentWhenNavbar" >
            <
            input type = "file"
            accept = ".xlsx, .xls"
            onChange = { handleFileChange }
            /> {
            file && ( <
                div >
                <
                h3 > Uploaded File: { file.name } < /h3> <
                button onClick = { handleUpload } > Upload to Server < /button> < /
                div >
            )
        } <
        /div>
);
}

export default EmployeeInfo;