import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'

export default function RTE({ name, control, label, defaultValue = "" }) {
    const darkMode = useSelector(state => state.theme?.darkMode) || false;
    
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1 text-gray-700 dark:text-gray-300'>
                {label}
            </label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
                        initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:14px; ${darkMode ? 'background-color: #242424; color: #ffffff;' : 'background-color: #ffffff; color: #242424;'} }`
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}

