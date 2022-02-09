pipeline {
    agent any

    stages {
        stage('Pull') {
            steps {
                git([url:'https://github.com/Nellemanette/orchestration.git', branch:'develop'])
            }
        }
        stage('Build') {
            steps {
                bat 'echo "banane"'
                bat 'Docker --version'
            }
        }
        stage('Docker Build') {
            agent any
            steps {
                bat 'docker-compose up'
            }
        }
    }
}