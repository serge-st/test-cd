pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/serge-st/test-cd.git'
            }
        }
        stage('Build') {
            steps {
                sh 'pnpm install'
                sh 'pnpm build'
            }
        }
        // stage('Deploy') {
        //     steps {
        //         // Add deployment steps here, e.g., using AWS CLI or S3 plugin
        //     }
        // }
    }
}