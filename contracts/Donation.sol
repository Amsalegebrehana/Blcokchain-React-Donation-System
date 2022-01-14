pragma solidity <=0.8.11;
pragma experimental ABIEncoderV2;
contract Donation{
    uint public charityCount=0;
    uint public donorsCount=0;
    DonorsInfo[] public donors;
    Charity[] public charities;

    struct Charity{
        uint id;
        address charityaddr;
        string name;
        string date;
        uint amountReceived;
        string description;
        string[] history;
    }

    struct DonorsInfo{
        uint id;
        address donoraddr;

        string name;
        uint amountDonated;
        string[] history;
        bool transfered;
    }
    mapping (address=>uint) private balances;
    mapping (address=> Charity) private charitym;
    mapping (address=> DonorsInfo) private donorm;


    // events
    event getCharitiesEv();
    event getCharityEv(uint id);
    event addCharityEv(string name, string description,  uint amountReceived, string date, string[] history);
    event getDonorsEv();
    event getDonorEv(uint id);
    event addDonorEv(uint charity_id, string name, uint amountDonated, string[] history, bool transfered);

    function getCharity(uint id) public  returns (Charity memory) {
        emit getCharityEv(id);
        return charities[id];
    }

    function getCharities() public  returns (Charity[] memory) {
        emit getCharitiesEv();
        return charities;
    }

    function addCharity(string memory name,string memory description, string memory date) public {

        charityCount++;
        string[] memory history=new string[](100);
        // charities.push(Charity(charityCount,msg.sender,name,date,0,description,history));
        charitym[msg.sender].id = charityCount;
        charitym[msg.sender].name = name;
        charitym[msg.sender].date = date;
        charitym[msg.sender].amountReceived = 0;
        charitym[msg.sender].description = description;
        charitym[msg.sender].history = history;
        
        emit addCharityEv(name,description,0,date,history);
    }

    function getdonors() public  returns (DonorsInfo[] memory){
        emit getDonorsEv();
        return donors;
    }

    function getdonor(uint id) public  returns (DonorsInfo memory){
        emit getDonorEv(id);
        return donors[id];
    }

    function addDonor( uint charity_id, uint amountDonated, string memory donorName) public {
        donorsCount++;
        string[] memory _history = new string[](100);
        donors[donorsCount] = DonorsInfo(donorsCount, msg.sender, donorName,amountDonated,_history, true);
        donorm[msg.sender].id= donorsCount;
        donorm[msg.sender].name = donorName;
        donorm[msg.sender].amountDonated = amountDonated;
        donorm[msg.sender].history = _history;
        
        charities[charity_id].history.push(donorName);
        
        emit addDonorEv(charity_id, donorName,  amountDonated, _history,  true);
    }
    event donateEv(address fromAddress, address toAddress,uint amountDonated);
    function donate(address fromAddress, address toAddress,uint amountDonated) public{
        addDonor(charitym[toAddress].id,amountDonated,donorm[fromAddress].name);
        withdraw(fromAddress, amountDonated);
        deposite(toAddress, amountDonated);
        emit  donateEv (fromAddress,  toAddress, amountDonated);
    }

    function deposite(address charityaddr, uint amountReceived) public payable returns (uint){
        balances[charityaddr] += amountReceived;
        // emit depositemade(charityaddr, amountReceived) event here
        return balances[charityaddr];
    }
    function withdraw(address  donoraddr, uint amountDonated) public returns (uint){
        require(amountDonated <= balances[donoraddr],"err");
        balances[donoraddr] -= amountDonated;
        // donoraddr.transfer(amountDonated);
        return balances[donoraddr];
        
    }
    
}