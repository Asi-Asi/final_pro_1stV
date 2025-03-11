import { Checkbox } from "@/components/ui/checkbox";
import PropTypes from "prop-types";

export default function TermsCheckbox({ agreeTerms, setAgreeTerms }) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" checked={agreeTerms} onCheckedChange={(checked) => setAgreeTerms(checked)} className="rounded-sm" required />
            <label htmlFor="terms" className="text-sm text-[#F4F4F4]">
                I agree to the <span className="text-[#00A896]">Terms</span> and <span className="text-[#00A896]">Privacy Policy</span>
            </label>
        </div>
    );
}

TermsCheckbox.propTypes = {
    agreeTerms: PropTypes.bool.isRequired,
    setAgreeTerms: PropTypes.func.isRequired,
};
