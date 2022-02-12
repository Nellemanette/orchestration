pipeline {
    agent any
    stages {
        stage('Pull') {
            steps {
                git([url:'https://github.com/Nellemanette/orchestration.git', branch:'develop'])
            }
        }
        boolean testPassed = true
        stage('Testing') {
            steps {
                try{
                    bat 'npm test'
                }catch (Exception e){
                    testPassed = false
                }
            }
        }
        stage('Dockerization') {
            steps {
                bat 'docker-compose up'
            }
        }
         stage('Release') {
            steps {
                if(testPassed){
                    withCredentials([gitUsernamePassword(credentialsId: 'jenkins-ci-lab-token', gitToolName: 'git-tool')]) {
                        bat 'git push -u origin release'
                    }
                }
            }
        }
    }
}