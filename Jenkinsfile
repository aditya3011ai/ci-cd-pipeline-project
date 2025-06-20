pipeline {
    agent {
    docker {
      image 'node:18'
      args '-p 3000:3000'
    }
}
  stages {
    stage('Install Dependencies') {
      steps {
        echo 'Installing dependencies...'
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        echo 'Running tests...'
        sh 'npm test'
      }
    }

    stage('Build Docker Image') {
      steps {
        echo 'Building Docker image...'
        sh 'docker build -t ci-cd-node-app .'
      }
    }

    stage('Run Container') {
      steps {
        echo 'Running Docker container...'
        sh 'docker run -d -p 3000:3000 ci-cd-node-app'
      }
    }
  }
}
