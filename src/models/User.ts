import Address from "./Address";
import Company from "./Company";
import DomainEntity from "./DomainEntity";

type User = DomainEntity & {
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

export default User