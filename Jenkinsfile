pipeline {
    agent any

    stages {
        stage('Paso 1: Crear ficheros') {
            steps {
                node('tpv') {
                    sh 'touch /home/ubuntu/muahahaha.txt'
                    sh 'touch /home/ubuntu/otroxD.sh'
                }
            }
        }
    }
}