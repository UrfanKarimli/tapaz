
const Proporties = ({ item }) => {

    return (
        <div className=' grid grid-cols-2 '>
            {item.location ?
                (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Şəhər</span>
                    <span className=' text-[#2f1f19]'> {item.location}</span>
                </div>) : (null)
            }
            {item.fuel_type ?
                (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Yanacaq növü</span>
                    <span className=' text-[#2f1f19]'> {item.fuel_type}</span>
                </div>) : (null)
            }
            {item.brand ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                <span className=' text-[#98918a]'>Marka</span>
                <span className=' text-[#2f1f19]'> {item.brand}</span>
            </div>) : (null)}
            {item.transmission ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                <span className=' text-[#98918a]'>Sürətlər qutusu</span>
                <span className=' text-[#2f1f19]'> {item.transmission}</span>
            </div>) : (null)}
            {item.model ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                <span className=' text-[#98918a]'>Model</span>
                <span className=' text-[#2f1f19]'> {item.model}</span>
            </div>) : (null)}
            {item.body_type ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                <span className=' text-[#98918a]'>Kuzov növü</span>
                <span className=' text-[#2f1f19]'> {item.body_type}</span>
            </div>) : (null)}
            {item.color ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                <span className=' text-[#98918a]'>Rəng</span>
                <span className=' text-[#2f1f19]'> {item.color}</span>
            </div>) : (null)}
            {item.year ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                <span className=' text-[#98918a]'>Buraxılış ili</span>
                <span className=' text-[#2f1f19]'> {item.year}</span>
            </div>) : (null)}
            {item.engine_capacity ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                <span className=' text-[#98918a]'>Mühərrik </span>
                <span className=' text-[#2f1f19]'> {item.engine_capacity}</span>
            </div>) : (null)}
            {item.mileage ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                <span className=' text-[#98918a]'>Yürüş, km</span>
                <span className=' text-[#2f1f19]'> {item.mileage}</span>
            </div>) : (null)}
            {
                item.job_type ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Iş vaxtı</span>
                    <span className=' text-[#2f1f19]'> {item.job_type}</span>
                </div>) : (null)
            }
            {
                item.frame_material ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Çərçivə</span>
                    <span className=' text-[#2f1f19]'> {item.frame_material}</span>
                </div>) : (null)
            }  {
                item.gear_type ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Sürət ötürücüsü</span>
                    <span className=' text-[#2f1f19]'> {item.gear_type}</span>
                </div>) : (null)
            }
            {
                item.wheel_size ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Təkər ölçüsü</span>
                    <span className=' text-[#2f1f19]'> {item.wheel_size}</span>
                </div>) : (null)
            }
            {
                item.brake_type ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Əyləc tipi</span>
                    <span className=' text-[#2f1f19]'> {item.brake_type}</span>
                </div>) : (null)
            }
            {
                item.size ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Ölçü</span>
                    <span className=' text-[#2f1f19]'> {item.size}</span>
                </div>) : (null)
            }
            {
                item.material ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Material</span>
                    <span className=' text-[#2f1f19]'> {item.material}</span>
                </div>) : (null)
            }
            {
                item.artist_name ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Rəssamın adı</span>
                    <span className=' text-[#2f1f19]'> {item.artist_name}</span>
                </div>) : (null)
            }
            {
                item.dimensions ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Ölçüləri</span>
                    <span className=' text-[#2f1f19]'> {item.dimensions}</span>
                </div>) : (null)
            }
            {
                item.technique ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Üslub</span>
                    <span className=' text-[#2f1f19]'> {item.technique}</span>
                </div>) : (null)
            }
            {
                item.lens_material ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Şüşə</span>
                    <span className=' text-[#2f1f19]'> {item.lens_material}</span>
                </div>) : (null)
            }
            {
                item.frame_material ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Çərçivə</span>
                    <span className=' text-[#2f1f19]'> {item.frame_material}</span>
                </div>) : (null)
            }
            {
                item.sex ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Cinsiyyət</span>
                    <span className=' text-[#2f1f19]'> {item.sex}</span>
                </div>) : (null)
            }
            {
                item.strategy_type ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Strategiya tipi</span>
                    <span className=' text-[#2f1f19]'> {item.strategy_type}</span>
                </div>) : (null)
            }
            {
                item.target_market ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Hədəf kütlə</span>
                    <span className=' text-[#2f1f19]'> {item.target_market}</span>
                </div>) : (null)
            }
            {
                item.campaign_type ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Companiya növü</span>
                    <span className=' text-[#2f1f19]'> {item.campaign_type}</span>
                </div>) : (null)
            }
            {
                item.target_audience ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Hədəf yaş qrupu</span>
                    <span className=' text-[#2f1f19]'> {item.target_audience}</span>
                </div>) : (null)
            }
            {
                item.course_type ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Dərslərin keçirilməsi</span>
                    <span className=' text-[#2f1f19]'> {item.course_type}</span>
                </div>) : (null)
            }
            {
                item.duration ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Müddət</span>
                    <span className=' text-[#2f1f19]'> {item.duration}</span>
                </div>) : (null)
            }
            {
                item.teacher_qualification ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Müəllimin biliyi</span>
                    <span className=' text-[#2f1f19]'> {item.teacher_qualification}</span>
                </div>) : (null)
            }
            {
                item.contact_number ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Əlaqə nömrəsi</span>
                    <span className=' text-[#2f1f19]'> {item.contact_number}</span>
                </div>) : (null)
            }
            {
                item.service_type ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Xidmət növü</span>
                    <span className=' text-[#2f1f19]'> {item.service_type}</span>
                </div>) : (null)
            }
            {
                item.technicians ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Texniklər</span>
                    <span className=' text-[#2f1f19]'> {item.technicians}</span>
                </div>) : (null)
            }
            {
                item.warranty ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>{item.warranty ? "Zəmanət verilir" : "Zəmanət verilmir"}</span>
                    <span className=' text-[#2f1f19]'> {item.warranty}</span>
                </div>) : (null)
            }
            {
                item.processor ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Prosessor</span>
                    <span className=' text-[#2f1f19]'> {item.processor}</span>
                </div>) : (null)
            }
            {
                item.ram ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Ram</span>
                    <span className=' text-[#2f1f19]'> {item.ram}</span>
                </div>) : (null)
            }
            {
                item.storage ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Yaddaş</span>
                    <span className=' text-[#2f1f19]'> {item.storage}</span>
                </div>) : (null)
            }
            {
                item.screen_size ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Ekran ölçüsü</span>
                    <span className=' text-[#2f1f19]'> {item.screen_size}</span>
                </div>) : (null)
            }
            {
                item.battery_life ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Batareya ömrü</span>
                    <span className=' text-[#2f1f19]'> {item.battery_life}</span>
                </div>) : (null)
            }
            {
                item.camera ? (<div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                    <span className=' text-[#98918a]'>Kamera</span>
                    <span className=' text-[#2f1f19]'> {item.camera}</span>
                </div>) : (null)
            }
        </div>
    )
}

export default Proporties