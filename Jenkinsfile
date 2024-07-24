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
        stage('Deploy') {
            steps {
                script {
                    foo = "bar"
                    distDir = "./dist/browser/."
                    htmlDir = "/usr/share/nginx/html/hex2048.stetsen.co/browser"
                }
                sh "cp -a ${distDir} ${htmlDir}"
            }
        }
    }
}