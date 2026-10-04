pipeline{
    agent any
    stages
    {
        stage('Checkout'){
            steps{
                checkout scm
            }
        }
        stage('Build'){
            steps {
              bat "docker build -t jen_test ."
            }
        }
        stage('Deploy')
        {
            steps{
                bat "docker rm --force test-jen_container"
                bat "docker run -d -p 4001:4000 --name=test-jen_container jen_test"
            }
        }
    }
    
}