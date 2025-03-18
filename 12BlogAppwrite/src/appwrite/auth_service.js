import conf from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        console.log("AuthService: Initializing with config:", {
            url: conf.appwriteUrl,
            projectId: conf.appwriteProjectId
        });

        if (!conf.appwriteUrl || !conf.appwriteProjectId) {
            throw new Error("Missing Appwrite configuration. Please check your .env file.");
        }
        
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

        // Log successful initialization
        console.log("AuthService: Successfully initialized");
    }

    async createAccount({ email, password, name }) {
        try {
            console.log("AuthService: Creating account for:", email);
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount) {
                console.log("AuthService: Account created successfully, attempting login");
                return this.login({ email, password });
            }
            return userAccount;
        } catch (error) {
            console.error("AuthService: Create account error:", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            console.log("AuthService: Attempting login for:", email);
            const session = await this.account.createEmailPasswordSession(
                email,
                password
            );
            console.log("AuthService: Session created:", session);
            
            if (session) {
                const userData = await this.getCurrentUser();
                console.log("AuthService: User data after login:", userData);
                return userData;
            }
            return null;
        } catch (error) {
            console.error("AuthService: Login error:", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            console.log("AuthService: Getting current user");
            const userData = await this.account.get();
            console.log("AuthService: Current user data:", userData);
            return userData;
        } catch (error) {
            if (error.code === 401) {
                console.log("AuthService: No authenticated user found");
                return null;
            }
            console.error("AuthService: Get current user error:", error);
            throw error;
        }
    }

    async logout() {
        try {
            console.log("AuthService: Attempting to logout");
            await this.account.deleteSession('current');
            console.log("AuthService: Logout successful");
        } catch (error) {
            console.error("AuthService: Logout error:", error);
            throw error;
        }
    }
}

// Create a single instance
const authService = new AuthService();

// Add error handler for uncaught promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

export default authService;