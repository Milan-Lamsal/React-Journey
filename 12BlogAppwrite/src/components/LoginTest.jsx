import React from 'react';
import authService from '../appwrite/auth_service';
import conf from '../config/config';

function LoginTest() {
    const handleTestLogin = async () => {
        try {
            const user = await authService.login({
                email: "test@example.com",
                password: "Test123!@#"
            });
            console.log("Login successful:", user);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const handleTestSignup = async () => {
        try {
            const user = await authService.createAccount({
                email: "test@example.com",
                password: "Test123!@#",
                name: "Test User"
            });
            console.log("Signup successful:", user);
        } catch (error) {
            console.error("Signup failed:", error);
        }
    };

    const testConnection = () => {
        console.log("Testing Appwrite configuration:");
        console.log("URL:", conf.appwriteUrl);
        console.log("Project ID:", conf.appwriteProjectId);
        console.log("Database ID:", conf.appwriteDatabaseId);
        console.log("Collection ID:", conf.appwriteCollectionId);
        console.log("Bucket ID:", conf.appwriteBucketId);
    };

    return (
        <div className="fixed bottom-4 right-4 space-x-2">
            <button
                onClick={testConnection}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
                Test Config
            </button>
            <button
                onClick={handleTestSignup}
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                Test Signup
            </button>
            <button
                onClick={handleTestLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Test Login
            </button>
        </div>
    );
}

export default LoginTest; 