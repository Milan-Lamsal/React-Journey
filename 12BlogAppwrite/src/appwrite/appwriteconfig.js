import conf from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setEndpoint(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost(title, slug, content, featuredImage, status, userId) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )

        } catch (error) {
            console.log("Appwrite service:: CreatePost::error", error)
        }


    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {
                title,
                content,
                featuredImage,
                status,

            }
            )

        } catch (error) {
            console.log("Appwrite service:: updatePost:: error", error)
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true

        } catch (error) {
            console.log("Appwrite service :: deletePost::error", error);
            return false
        }
    }

    //Get document, one document  (single post )
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug

            )

        } catch (error) {
            console.log("Appwrite service::getPost::error", error);
            return false
        }
    }
    //Query -> need only those value whose status is active
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                // [
                //     Query.equal("status", "active")
                // ] we could write this way as well since we used up already queries =[Query.eual] so, 
                queries,
            )

        } catch (error) {
            console.log("Appwrite service::getPosts::error", error);
            return false


        }
    }

    //file upload services or method
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )

        } catch (error) {
            console.log("Appwrite service::uploadFile::error", error);
            return false

        }

    }

    //DeleteFile
    async deleFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true

        } catch (error) {
            console.log("Appwrite service::getFile::error", error);
            return false
        }
    }

    //Get file Preview
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }


}


const service = new Service()
export default service