#########################
######  Constants  ######
#########################
LIGHT_PURPLE='\033[1;35m'
LIGHT_RED='\033[1;31m'
YELLOW='\033[1;33m'
venvdir="venv"

#########################
######     PIP     ######
#########################

pip=`command -v pip`
if [ -z $pip ]
  then
    echo "Pip is not installed. Installing pip now!"
    curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
    sudo python get-pip.py
  else
    echo "Verified Pip is installed!: "$pip
fi

##########################
######     VENV     ######
##########################
venv=`command -v virtualenv`
if [ -z $venv ]
  then
    echo "Virtualenv is not installed. Installing Virtualenv now!"
    pip install virtualenv
  else
    echo "Verified Virtualenv is installed!: "$venv
fi

if [ ! -d venv ]
  then
    echo "Creating Virtualenv dir 'venv'"
    python3 -m venv $venvdir
fi

##########################
## Install Requirements ##
##########################
echo "Installing requirements..."
$venvdir/bin/pip install -r requirements.txt

##########################
####   my.properties  ####
##########################
if [ ! -f ./my.properties ]
  then
    echo "Creating new my.properties file!"
    touch my.properties
    echo -e "${LIGHT_RED}###################################################"
    echo -e "${LIGHT_RED}## FILL IN MY.PROPERTIES FILE BEFORE CONTINUING! ##"
    echo -e "${LIGHT_RED}###################################################"
fi

#if ! grep -q "API_KEY=" ./my.properties; then
#  echo "API_KEY=" >> my.properties
#fi


empty_props=`grep '=$' my.properties`
if [[ ! -z "${empty_props}" ]]
  then
    echo "${LIGHT_RED}###################################"
    echo "${LIGHT_RED}THE FOLLOWING PROPERTIES ARE EMPTY:"
    echo "${LIGHT_RED}${empty_props}"
    echo "${LIGHT_RED}###################################"
  else
    echo "Generating export and alias file..."
    if [ -f ./source.sh ]
      then
        rm ./source.sh
    fi
    sed -E -n 's/[^#]+/export &/ p' my.properties >> source.sh
    echo "alias activate='source $venvdir/bin/activate'" >> source.sh
fi

echo "${LIGHT_PURPLE}##########################################################"
echo "${LIGHT_PURPLE}## Please run ${LIGHT_RED}'source source.sh'${LIGHT_PURPLE} now to complete setup! ##"
echo "${LIGHT_PURPLE}##      Then run ${LIGHT_RED}'activate'${LIGHT_PURPLE} to switch to virtualenv     ##"
echo "${LIGHT_PURPLE}##########################################################"