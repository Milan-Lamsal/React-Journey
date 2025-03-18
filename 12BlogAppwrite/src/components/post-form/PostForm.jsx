import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import appwriteService from '../../appwrite/appwriteconfig'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        },
    })
    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    const submit = async (data) => {
        if (post) {
            // Update post
            let file = null;
            if (data.image && data.image[0]) {
                file = await appwriteService.uploadFile(data.image[0]);
            }

            if (file && post.featuredImage) {
                await appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : post.featuredImage,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            // Create post
            if (!data.image || !data.image[0]) {
                console.error('Featured image is required');
                return;
            }

            const file = await appwriteService.uploadFile(data.image[0]);
            
            if (file) {
                const dbPost = await appwriteService.createPost({
                    ...data,
                    featuredImage: file.$id,
                    userId: userData.$id,
                });
                
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                console.error('File upload failed');
            }
        }
    };

    //  slug using for if user gives space then we add - hypne 
    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }
        return ''

    }, [])
    //Interview Quesiton 
    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        })

        return () => {
            subscription.unsubscribe()
        }

    }, [watch, slugTransform, setValue]);




    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap w-full mx-auto px-0">
            <div className="w-full md:px-2 mb-4">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-full md:px-2 mt-4">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg w-full"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status :"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full mt-4">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

export default PostForm


