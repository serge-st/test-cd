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
                sh 'pnpm build:cicd"'
            }
        }
        // stage('Deploy') {
        //     steps {
        //         script {
        //             distDir = "./dist/browser/."
        //             htmlDir = "/usr/share/nginx/html/hex2048.stetsen.co/browser"
        //         }
        //         sh "cp -a ${distDir} ${htmlDir}"
        //     }
        // }
    }
}