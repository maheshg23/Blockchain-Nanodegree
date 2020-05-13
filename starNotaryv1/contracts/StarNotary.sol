pragma solidity >=0.4.24;

contract StarNotary {

    string public starName;
    address public starOwner;

    event starClaimed(address owner);

    constructor() public {
        starName = "Awesome Mahi Star";
    }

    function changeName(string memory _name) public {
        starName = _name;
    }

    function claimStar() public {
        starOwner = msg.sender;
        emit starClaimed(msg.sender);
    }

}