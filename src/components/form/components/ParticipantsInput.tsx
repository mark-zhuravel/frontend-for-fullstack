interface ParticipantsInputProps {
  error?: string;
  register: any;
}

const ParticipantsInput = ({ error, register }: ParticipantsInputProps) => (
  <div className="ml-8 mr-12">
    <label className="block mb-3 text-[15px] text-[#E6E6E6] font-medium leading-[150%]">
      Количество участников
    </label>
    <input
      type="number"
      {...register}
      className="w-full h-[53px] border px-6 py-4 opacity-[0.64] text-[#E6E6E6] rounded-[3px] font-medium bg-transparent border-white/40"
      style={{ fontVariantNumeric: "lining-nums proportional-nums" }}
    />
    {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
  </div>
);

export default ParticipantsInput;